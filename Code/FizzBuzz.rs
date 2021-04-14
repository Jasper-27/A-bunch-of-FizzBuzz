// FizzBuzz in Rust

const FIZZ: u32 = 3;
const BUZZ: u32 = 5;

fn main() {
	for i in 1..100{
		let mut fizz_out = String::new();
		let mut buzz_out = String::new();
		if i % FIZZ == 0 {
			fizz_out = String::from("Fizz");
		}
		if i % BUZZ == 0 {
			buzz_out = String::from("Buzz");
		}
		let out = format!("{}{}", fizz_out, buzz_out);
		if out == "" {
			println!("{}", i);
		}
		else {
			println!("{}", out);
		}
	}
}
