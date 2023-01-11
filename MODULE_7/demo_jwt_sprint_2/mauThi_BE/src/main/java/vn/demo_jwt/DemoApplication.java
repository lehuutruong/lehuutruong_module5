package vn.demo_jwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
//        testStringImmutable();
////        testStringBuffer();
////        testStringBuilder();
////        testTimeOut();
//    }
//    public static void testStringImmutable(){
//        String a = "hello";
//        a+="world";
//        System.out.println(a);
//    }
//    public static void testStringBuffer(){
//        StringBuffer sb = new StringBuffer("hello");
//        sb.append('a');
//        System.out.println(sb);
//    }
//    public static void testStringBuilder(){
//        StringBuilder sd= new StringBuilder("java");
//        sd.append('j');
//        System.out.println(sd);
//    }
//    public static void testTimeOut(){
//        long startTime = System.currentTimeMillis();
//        StringBuffer sb = new StringBuffer("Java");
//        for (int i=0; i<1000000; i++){
//            sb.append("hoconline");
//        }
//        System.out.println("Thoi gian tieu ton boi StringBuffer: " + (System.currentTimeMillis() - startTime) + "ms");
//        startTime = System.currentTimeMillis();
//        StringBuilder sb2 = new StringBuilder("Java");
//        for (int i=0; i<1000000; i++){
//            sb2.append("hoconline");
//        }
//        System.out.println("Thoi gian tieu ton boi StringBuilder: " + (System.currentTimeMillis() - startTime) + "ms");
    }
}
