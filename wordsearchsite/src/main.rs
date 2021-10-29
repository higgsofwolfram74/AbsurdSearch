use std::collections::HashSet;
use rayon::prelude::*;
use std::io;
use std::fs::File;

mod lib;

fn main() {

    let wordsearch_path: &str = match File::open("./wordsearch.txt") {

        Ok(_) => "./wordsearch.txt",
        Err(y) => panic!("Error found with opening file {}", y)
    };


    let words_path: &str = match File::open("./wordlist.txt") {

        Ok(_) => "./wordlist.txt",
        Err(y) => panic!("Error found with opening file {}", y)
    };

    println!("Allocating data");

    let to_solve = lib::WordBlob::alloc(wordsearch_path, words_path, true);

    println!("Starting execution");

    let results: Vec<_> = (0..to_solve.wordsearch.len())
        .into_par_iter()
        .map(|x| lib::WordBlob::start(&to_solve, lib::Wordsearch::indexer(&to_solve.wordsearch, x)))
        .collect();

    if results.iter().all(|x| x.is_none()) {
        println!("No words found.")        
    } else {
        let mut words: HashSet<String> = HashSet::new();

        for result in results {
            match result {
                Some(v) => {
                    for res in v.iter() {
                        if !(words.contains(&res.0)) {
                            println!("Word {} found at {:?} going {}", res.0, res.2, res.1);
                            words.insert(res.0.clone());
                        }
                    }
                }
                    //.for_each(|x| println!("Word {} found at {:?} going {}", x.0, x.2, x.1)),
                None => (),
            }
        }
    }
    let mut _hold_on = String::new();

    println!("Please press enter to continue");

    io::stdin()
        .read_line(&mut _hold_on)
        .expect("Failed to read line.");
}


