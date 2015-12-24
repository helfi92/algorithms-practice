package practice;

import java.util.ArrayList;
import java.util.Scanner;

public class replaceSpacesWithPercentageTwenty {

	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);  // Reading from System.in
		System.out.println("Write something with spaces: ");
		String line = reader.nextLine();
		replaceSpacesWithPercentage20(line);
	}
	public static void replaceSpacesWithPercentage20(String line){
		char[] char_line = line.toCharArray();
		ArrayList<Character> sol = new ArrayList<Character>();
		
		for(int i = 0 ; i < char_line.length ; i++){
			if(char_line[i] == 32){
				sol.add('%');
				sol.add('2');
				sol.add('0');
			}else{
				sol.add(char_line[i]);
			}
			
		}
		String newStr = "";
		for ( char i : sol){
			newStr += i;
		}
		System.out.print(newStr);
	}

}
