import java.math.*;

public class BigIntegerEx1 {
    // BigInteger의 최대값은 약 10의 6억 제곱. 매우 큰 수.
    public static void main(String[] args) {
        System.out.println(calcFactorial(100));
    }

    public static String calcFactorial(int n) {
        return factorial(BigInteger.valueOf(n)).toString();
    }

    public static BigInteger factorial(BigInteger n) {
        if (n.equals(BigInteger.ZERO)) {
            return BigInteger.ONE;
        }
        else {
            return n.multiply(factorial(n.subtract(BigInteger.ONE)));
        }
    }
}
