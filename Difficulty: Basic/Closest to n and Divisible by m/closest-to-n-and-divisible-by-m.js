/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
    closestNumber(n, m) {
        // code here
        let maxAbs = -1;
                let ans = 0;
                let minDiff = Infinity;
                for (let i = n - Math.abs(m); i <= n + Math.abs(m); i++) {
                    if (i % m === 0) {
                        let diff = Math.abs(n - i);

                        if (diff < minDiff) {
                            minDiff = diff;
                            ans = i;
                            maxAbs = Math.abs(i);
                        } else if (diff === minDiff && Math.abs(i) > maxAbs) {
                            ans = i;
                            maxAbs = Math.abs(i);
                        }
                    }
                }

                return ans;
    }
}