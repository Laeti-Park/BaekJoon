import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Baek1308 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int sum = 0;
        int[] month = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

        StringTokenizer startDate = new StringTokenizer(br.readLine());
        StringTokenizer endDate = new StringTokenizer(br.readLine());

        int startYear = Integer.parseInt(startDate.nextToken());
        int startMonth = Integer.parseInt(startDate.nextToken());
        int startDay = Integer.parseInt(startDate.nextToken());

        int endYear = Integer.parseInt(endDate.nextToken());
        int endMonth = Integer.parseInt(endDate.nextToken());
        int endDay = Integer.parseInt(endDate.nextToken());

        if (endYear - startYear > 1000 ||
                (endYear - startYear == 1000 && startMonth < endMonth) ||
                (endYear - startYear == 1000 && startMonth == endMonth && startDay <= endDay)) {
            System.out.println("gg");
        } else {
            for (int i = startYear; i <= endYear; i++) {
                sum += 365;
                sum += leapYear(i);
            }

            for (int i = 0; i < startMonth - 1; i++) {
                sum -= month[i];
                if (i == 1) {
                    sum -= leapYear(startYear);
                }
            }
            sum -= startDay;

            for (int i = endMonth - 1; i < 12; i++) {
                sum -= month[i];
                if (i == 1) {
                    sum -= leapYear(endYear);
                }
            }
            sum += endDay;

            System.out.println("D-" + sum);
        }
    }

    public static int leapYear(int year) {
        if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
            return 1;
        } else {
            return 0;
        }
    }
}