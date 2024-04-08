
class Demo {
    private int a;
    private int b;

    public Demo() {
        System.out.println("zero paramitter");
    }

    public Demo(int a, int b) {
        this.a = a;
        this.b = b;
    }

    void disp() {
        System.out.println(a);
        System.out.println(b);
    }

}

public class Main {

    public static void main(String[] args) {
        Demo d = new Demo(10, 20);
        d.disp();
    }
}