import java.util.Optional;

public class OptionalEmpty {
    public static void main(String[] args) {
        Optional<String> isThisNull = getSomeString();
        isThisNull.ifPresent(str -> System.out.println(str.toUpperCase()));
    }

    private static Optional<String> getSomeString() {
        return Optional.empty();
    }
}
