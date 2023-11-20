import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Baek11365 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 

        while(true) {
            String str = br.readLine();
            if (str.equals("END")) {
                break;
            }
            for (int j = 0; j < str.length(); j++) {
				bw.write(str.charAt(str.length() - j - 1)); 
            }
			bw.write("\n"); 
        }
		bw.flush(); 
    }
}