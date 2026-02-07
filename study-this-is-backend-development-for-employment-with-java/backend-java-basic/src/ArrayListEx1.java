import java.util.ArrayList;
import java.util.List;

public class ArrayListEx1 {
    public static void main(String[] args) {
        List<String> list = new ArrayList<String>();

        list.add("public");
        list.add("static");
        list.add("void");

        for (int i = 0; i < 3; i++) {
            System.out.println(list.get(i));
        }

        list.remove(1);
        int voidIndex = list.indexOf(1);
        System.out.println("void의 Index: " + voidIndex);
    }
}
