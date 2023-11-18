package com.codewithmosh;

public class Main {
    public static void main(String[] names) {
        Array numbers = new Array(3);
        Array numbers2 = new Array(1);
        numbers2.insert(4);
        numbers.insert(7);
        numbers.insert(1);
        numbers.insert(4);
        numbers.insert(2);
        numbers.insert(3);
        numbers.insert(9);
        numbers.insert(5);
        numbers.insert(6);
        numbers.insert(8);
        numbers.removeAt(1);
        System.out.println("IndexOf 1 = " + numbers.indexOf(1));
        System.out.println("Max = " + numbers.max());
        System.out.println("Intersect numbers of number2 " + numbers.intersect(numbers2));
        numbers.print();
    }
}

