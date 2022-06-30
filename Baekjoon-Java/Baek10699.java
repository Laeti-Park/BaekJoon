/* 
 * 10699번 문제 : 오늘 날짜
 * 
 * 문제 : 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.
 * 
 * 출력 : 서울의 오늘 날짜를 "YYYY-MM-DD" 형식으로 출력한다.
 */

import java.time.*;
import java.time.format.DateTimeFormatter;

public class Baek10699 {
    public static void main(String[] args) {
        ZonedDateTime today = ZonedDateTime.now(ZoneId.of("Asia/Seoul"));

        System.out.println(today.format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
    }
}