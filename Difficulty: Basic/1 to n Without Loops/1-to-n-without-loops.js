class Solution {
    printTillN(n) {
        // code here
        if (n <= 0){
            return;
        }
        this.printTillN(n - 1);
        process.stdout.write(n + " ");
    }
}