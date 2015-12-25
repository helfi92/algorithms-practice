package practice;

import java.util.ArrayList;
import java.util.Scanner;

public class stringCompression {
	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);
		System.out.print("String to compres: ");
		String line = reader.nextLine();
		stringCompression(line);
	}
	
	public static void stringCompression(String toCompress){
		int j=0;
		String newStr = "";
			
		for( int i = 0 ; i < toCompress.length(); i++){
			//only go through this when last value of string
			if(i == (toCompress.length() - 1)){
				if(toCompress.charAt(i) != toCompress.charAt(j)){							
					newStr += (i-j);
					j = i;
				}
				if(i == j){
					newStr = newStr + toCompress.charAt(i);
					newStr = newStr + "1";
				}else if(toCompress.charAt(i) == toCompress.charAt(j)){							
					newStr += (i-j + 1);
					
				}
				break;
			}			
			if(i == j){
				newStr = newStr + toCompress.charAt(i);
			}
			
			if(toCompress.charAt(i) != toCompress.charAt(j)){							
				newStr += (i-j);
				j = i;
				i = i - 1;
			}			
		}
		System.out.println("New Compressed String: " + newStr.toString());
	}
	


}
