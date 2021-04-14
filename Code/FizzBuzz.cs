using System;
					
public class Program
{
	public static int Fizz = 3, Buzz = 5, X = 100;
	
	private static string fizzStr = "Fizz", buzzStr = "Buzz";
	
	private static void FizzBuzz(int fizz, int buzz, int limit) 
	{
		for (int i = 1; i < limit; i++)
		{
			if (i % fizz == 0)
			{
				if (i % buzz == 0)
				{
					Console.Write(fizzStr + buzzStr + " ");
				}
				else 
				{
					Console.Write(fizzStr + " ");
				}
			}
			else if (i % buzz == 0)
			{
				Console.Write(buzzStr + " ");
			}
			else 
			{
				Console.Write(i + " ");
			}
		}
		
		Console.WriteLine();
	}
	
	public static void Main()
	{
		FizzBuzz(Fizz, Buzz, X);
	}
}
