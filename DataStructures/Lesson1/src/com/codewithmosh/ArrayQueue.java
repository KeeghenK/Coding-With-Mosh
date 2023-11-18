package com.codewithmosh;

import java.util.Arrays;

public class ArrayQueue {
    private int[] items;
    private int count;
    private int rear;
    private int front;

    public ArrayQueue(int capacity) {
        items = new int[capacity];
    }

    public void enqueue (int item) {
        if (isFull())
            throw new IllegalStateException();

        items[rear] = item;
        rear = (rear + 1) % items.length;
        count++;
    }

    public void dequeue() {
        items[front] = 0;
        front = (front + 1) % items.length;
        count--;
    }

    public int peek() {
        return items[rear];
    }

    public boolean isEmpty() {
        return rear == front;
    }

    public boolean isFull() {
        return count == items.length;
    }

    private void sequential() {
        int [] newItems = new int[items.length];
        int newFront = front;
        int frontIndex = 0;
        int rearIndex = 0;

        while (newFront != items.length)
            newItems[frontIndex++] = items[newFront++];

        while (frontIndex != count)
            newItems[frontIndex++] = items[rearIndex++];

        items = newItems;
    }

    @Override
    public String toString() {
        this.sequential();
        var content = Arrays.copyOfRange(items, 0, count);
        return Arrays.toString(content);
    }
}

