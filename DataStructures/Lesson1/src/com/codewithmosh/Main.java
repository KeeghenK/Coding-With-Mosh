package com.codewithmosh;


public class Main {
    public static void main(String[] args) {
        String name = "Green 0 Apple";
        int number = 0;
        CharFinder test = new CharFinder();

        char ch = test.findFirstRepeatedChar(name);

        System.out.println(ch);
    }
}

