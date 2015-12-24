package practice;

import java.util.Scanner;

public class isPermutationOfOther {
	
	public static void main(String[] args) {
		Scanner reader = new Scanner(System.in);  // Reading from System.in
		System.out.println("First word: ");
		String firstWord = reader.nextLine();
		System.out.println("Second word: ");
		String secondWord = reader.nextLine();
		
		isPermutationOfOther(firstWord, secondWord);
	}
	
	public static boolean isPermutationOfOther(String strOne, String strTwo){
		if(strOne.length() != strTwo.length()){
			System.out.println("Not a permutation");
			return false;
		}
		for(int i = 0 ; i < strOne.length() ; i++){
			System.out.println(strOne.charAt(i));
			if(strOne.charAt(i) != strTwo.charAt(i)){
				System.out.println("Not a permutation");
				return false;
			}
		}
		System.out.println("Is a permutation");
		return true;
	}

}
