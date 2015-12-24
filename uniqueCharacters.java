package practice;

public class uniqueCharacters {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String uniqueStr,notUniqueStr;
		uniqueStr = "abcdefg";
		notUniqueStr = "abccdefg";
		hasUniqueCharacters(uniqueStr);
		hasUniqueCharacters(notUniqueStr);
	}
	
	public static boolean hasUniqueCharacters(String str){
		//if length is > 2^8 (# of ascii characters)
		if(str.length() > 256) return false;
		
		boolean[] char_set = new boolean[256];
		for( int i = 0 ; i < str.length() ; i++){
			int val = str.charAt(i);
			if(char_set[val]) return false;
			char_set[val] = true;
			
		}
		return true;
	}
	
	

}
