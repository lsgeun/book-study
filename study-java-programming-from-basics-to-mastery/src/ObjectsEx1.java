import java.util.*;
import static java.util.Objects.*;

public class ObjectsEx1 {
    public static void main(String[] args) {
//        System.out.println("toString(null)="+toString(null)); // 에러
        System.out.println("toString(null)="+Objects.toString(null));
    }
}