import { ethers } from 'ethers';
// CoinOracle Contract
export class CoinOracle {
    private owner: string;
    private coinPrices: Map<string, number>;
    private consumers: Map<number, SimpleCoinConsumer>;

    constructor(owner: string) {
        this.owner = owner;
        this.coinPrices = new Map();
        this.consumers = new Map();
    }

    // Event handler simulation
    events: {
        RequestCoinPrice: (name: string, consumer: string, reqId: number) => void;
    } = {
        RequestCoinPrice: (name, consumer, reqId) => {
            console.log(`RequestCoinPrice Event: name=${name}, consumer=${consumer}, reqId=${reqId}`);
        }
    };

    requestPrice(_name: string, _reqId: number, sender: string) {
        if (!this.consumers.has(_reqId)) {
            const consumer = new SimpleCoinConsumer(this);
            this.consumers.set(_reqId, consumer);
            this.events.RequestCoinPrice(_name, sender, _reqId);
        }
    }

    update(_reqId: number, priceInCents: number, sender: string) {
        if (sender !== this.owner) throw new Error("Only owner can update prices");
        const consumer = this.consumers.get(_reqId);
        if (consumer) {
            consumer.coinPrice(priceInCents, _reqId);
        }
    }
}

// SimpleCoinConsumer Contract
export class SimpleCoinConsumer {
    private coinOracle: CoinOracle;
    public nonce: number;
    private amountsToConvert: Map<number, { coin: string, amount: number }>;

    constructor(coinOracle: CoinOracle) {
        this.coinOracle = coinOracle;
        this.nonce = 0;
        this.amountsToConvert = new Map();
    }

    events: {
        Exchange: (coin: string, amountInCents: number, amountInCoins: number) => void;
    } = {
        Exchange: (coin, amountInCents, amountInCoins) => {
            console.log(`Exchange Event: coin=${coin}, amountInCents=${amountInCents}, amountInCoins=${amountInCoins}`);
        }
    };

    doCleverStuff(coin: string, amountInCents: number) {
        this.nonce += 1;
        this.coinOracle.requestPrice(coin, this.nonce, this.coinOracle.owner);
        this.amountsToConvert.set(this.nonce, { coin, amount: amountInCents });
    }

    coinPrice(priceInCents: number, nonce: number) {
        const request = this.amountsToConvert.get(nonce);
        if (!request) throw new Error("Invalid nonce or request not found");
        
        const amountInCoins = request.amount * priceInCents;
        this.amountsToConvert.delete(nonce);
        this.events.Exchange(request.coin, request.amount, amountInCoins);
    }
}
