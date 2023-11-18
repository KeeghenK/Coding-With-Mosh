package com.codewithmosh;

import java.util.Arrays;

public class PriorityQueue {
    int[] items = new int[5];
    int front = 0;
    int count = 0;
    int lastItem;

    public void add(int number) {
        int[] newItems = new int[items.length];
        int index = 0;

        if (number > lastItem) {
            lastItem = number;
            items[count++] = number;
        } else {
            for (int item : items) {
                if (number > item)
                    newItems[index++] = item;
                else {
                    newItems[index++] = number;
                    number = item;
                }
            }
            items = newItems;
            items[count++] = lastItem;
        }
    }

    public void remove() {
        items[front++] = 0;
    }

    public String toString() {
        return Arrays.toString(items);
    }
}
