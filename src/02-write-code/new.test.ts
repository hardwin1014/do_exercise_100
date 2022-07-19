/**
 * @description 自定义 new test
*/
import {customNew} from "./new";

describe("自定义 new",() => {
    it("new", () => {
        class Foo{
            name: string
            city: string
            constructor(name: string) {
                this.name = name;
                this.city = "上海"
            }

            getName() {
                return this.name
            }
        }
        const f = customNew<Foo>(Foo,"coderwxh",100)
        expect(f.name).toBe("coderwxh")
        expect(f.city).toBe("上海")
        expect(f.getName()).toBe("coderwxh")
    })
})
