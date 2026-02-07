import java.util.Optional;

public class OptionalValue {
    public static void main(String[] args) {
        Optional<String> isThisNull = getSomeString();
        isThisNull.ifPresent(str -> System.out.println(str.toUpperCase()));
    }

    private static Optional<String> getSomeString() {
        return Optional.of("public static void");
//        return Optional.ofNullable("public static void"); // 동일
    }
}