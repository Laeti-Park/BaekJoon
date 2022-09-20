import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Baek11945 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 

		String str[] = br.readLine().split(" "); 
		int a = Integer.parseInt(str[0]); 
		int b = Integer.parseInt(str[1]); 

        for (int i = 0; i < a; i++) {
            String line = br.readLine();
            for (int j = 0; j < b; j++) {
				bw.write(line.charAt(b - j - 1)); 
            }
			bw.write("\n"); 
        }
    }
}