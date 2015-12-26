package practice;

public class singleArrayImplementThreeStacks {
	final static int STACK_SIZE = 100;
	static int[] parentStack = new int[3 * STACK_SIZE];
	static int[] stackPointer = {-1,-1,-1}; //pointer to track top element
	
	public static void main(String[] args) throws Exception {
		push(0,12);
		push(1,22);
		push(2,16);
		System.out.print("[");
		for(int item : parentStack){
			System.out.print(item + ",");	
		}
		System.out.print("]");
	
	
	}
	
	public static int absTopOfStack(int stackNum){
		
		int val = (stackNum * STACK_SIZE) + stackPointer[stackNum] + 1;
		
		return val;
	}
	
	public static void push(int stackNum, int value) throws Exception {
		//check if we have space
		if(stackPointer[stackNum] + 1 > STACK_SIZE){
			throw new Exception("Out of space");
		}
		parentStack[absTopOfStack(stackNum)] = value;
		stackPointer[stackNum]++;
		
	}
	
	public static int pop(int stackNum) throws Exception{
		//throw error if empty
		if(stackPointer[stackNum] == -1){
			throw new Exception("Trying to pop an empty stack");			
		}
		
		int value = parentStack[absTopOfStack(stackNum)];
		parentStack[absTopOfStack(stackNum)] = 0;
	
		stackPointer[stackNum]--;
		
		return value;
	}
	
	public static int peek(int stackNum){
		return parentStack[absTopOfStack(stackNum)];
	}
	
	boolean isEmpty(int stackNum){
		if(stackPointer[stackNum] == -1) {
			return true;
		}
		return false;
	}
	

	
	

}
