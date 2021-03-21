class TestService {
    static test: number;

    static createTest(test: number) {
        TestService.test = test;
    }

    static getTest(): number {
        return TestService.test;
    }

}

export default TestService;
