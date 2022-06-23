import java.time.*;
import java.time.format.DateTimeFormatter;

public class Baek10699 {
    public static void main(String[] args) {
        ZonedDateTime today = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));

        System.out.println(today.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
    }
}