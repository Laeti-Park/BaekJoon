/* 
 * 3733 문제 : Shares, 주식
 * 
 * 문제 : 
 * A group of N persons and the ACM Chief Judge share equally a number of S shares (not necessary all of them).
 * Let x be the number of shares aquired by each person (x must be an integer).
 * The problem is to compute the maximum value of x.
 * Write a program that reads pairs of integer numbers from an input text file.
 * Each pair contains the values of 1 ≤ N ≤ 10000 and 1 ≤ S ≤ 109 in that order.
 * The input data are separated freely by white spaces, are correct, and terminate with an end of file.
 * For each pair of numbers the program computes the maximum value of x and prints that value on the standard output
 * from the beginning of a line, as shown in the example below.
 * 
 * Shares - 주식
 * Chief Judge - 주심
 * 
 * N명으로 구성된 그룹과 ACM 주심은 동일한 수의 S개 주식을 공유한다. (모두 분배하지 않아도 됨.)
 * x를 각 사람이 공유한 주식 개수라고 하자. (x는 정수)
 * x의 최댓값을 계산하여야 한다.
 * N과 S값을 순서대로 입력한다. (1 ≤ N ≤ 10000 / 1 ≤ S ≤ 10^9)
 * 입력 데이터는 공백으로 구분되며, 파일 끝과 함께 종료된다.
 * 각 숫자 쌍에 대해 x의 최대값을 계산하고 아래 예시와 같이 출력하라.
 * 
 * S주식을 N명이과 주심이 공유하는 주식 개수를 출력
 * 
 */

import java.util.Scanner;

public class Baek3733 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n, s;

        while(scanner.hasNext()){
            n = scanner.nextInt();
            s = scanner.nextInt();
            System.out.println(s/(n+1));
        }
    }
}
