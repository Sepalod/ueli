import { CountRepository } from "../../ts/count-repository";
import { Count } from "../../ts/count";

export class FakeCountRepository implements CountRepository {
    private count: Count;

    constructor(count: Count) {
        this.count = count;
    }

    public getCount(): Count {
        return this.count;
    }

    public updateCount(count: Count): void {
        this.count = count;
    }
}
