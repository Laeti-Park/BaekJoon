import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Baek1978 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());
        int sum = 0;
        
        Boolean[] prime = new Boolean[count];
        String[] str = br.readLine().split(" ");
        for (int j = 0; j < count; j++) {
            prime[j] = isPrime(Integer.parseInt(str[j]));
        }

        for (int j = 0; j < count; j++) {
            if(prime[j] == true) {
                sum++;
            }
        }
        
        System.out.println(sum);
    }

    private static Boolean isPrime(int parseInt) {
        if(parseInt == 1) {
            return false;
        }

        for (int i = 2; i< parseInt; i++) {
            if(parseInt % i ==0) {
                return false;
            }
        }

        return true;
    }
}
