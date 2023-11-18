package com.codewithmosh;

import java.util.Arrays;
import java.util.Stack;

public class StackQueue {
    private Stack<Integer> items = new Stack<>();

    public void push(int item) {
        items.push(item);
    }

    public void pop() {
        if (items.empty())
            throw new IllegalStateException();

        Stack<Integer> newItems = new Stack<>();

        while (!items.empty())
            newItems.push(items.pop());

        newItems.pop();

        while (!newItems.empty())
            items.push(newItems.pop());
    }

    @Override
    public String toString() {
        return items.toString();
    }
}
