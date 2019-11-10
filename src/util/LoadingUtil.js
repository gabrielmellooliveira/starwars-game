export class LoadingUtil {
    static GetArrayLoading(num) {
        let arrayLoading = []

        for (let i = 0; i < num; i++) {
            arrayLoading.push(i);
        }

        return arrayLoading;
    }
}