import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Baek2751 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

        ArrayList<Integer> list = new ArrayList<>();
        int num = Integer.parseInt(br.readLine());
        for (int i = 0; i < num; i++) {
            list.add(Integer.parseInt(br.readLine()));
        }
        
        Collections.sort(list);

		for(Integer c : list) {
			sb.append(c).append("\n");
		}
		
		System.out.println(sb);
    }
}