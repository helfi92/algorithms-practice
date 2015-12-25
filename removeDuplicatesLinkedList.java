package practice;

import java.util.LinkedList;

public class removeDuplicatesLinkedList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LinkedList<String> list = new LinkedList<String>();
		list.add("hello");
		list.add("its");
		list.add("me");
		list.add("hello");
		list.add("from");
		list.add("the");
		list.add("other");
		list.add("side");
		System.out.println(list.toString());
		System.out.println(removeDuplicates(list).toString());
	}
	
	public static LinkedList removeDuplicates(LinkedList list){
		int pointer = 0;
		for(int i = 0 ; i < list.size() ; i++){
			if(i != pointer && list.get(pointer).equals(list.get(i))){
				list.remove(i);
			}
		}
		return list;
	}

}
