package com.codewithmosh;

import java.util.NoSuchElementException;

public class LinkedList {
  private static class Node {
    private int value;
    private Node next;

    public Node(int value) {
      this.value = value;
    }
  }

  private Node first;
  private Node last;
  private int size;

  public void addFirst (int item) {
    var node = new Node(item);

    if (isEmpty())
      first = last = node;
    else {
      node.next = first;
      first = node;
    }

    size++;
  }

  public void addLast (int item) {
    var node = new Node(item);

    if (isEmpty())
      first = last = node;
    else {
      last.next = node;
      last = node;
    }

    size ++;
  }

  private boolean isEmpty() {
    return first == null;
  }

  public int indexOf (int item) {
    int index = 0;
    var current = first;
    while (current != null) {
      if (current.value == item) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  public boolean contains(int item) {
    return indexOf(item) != -1;
  }

  public void removeFirst() {
    if (isEmpty()) throw new NoSuchElementException();

    if (first == last)
      first = last = null;
    else {
      var item = first;
      first = first.next;
      item.value = 0;
      item.next = null;
    }

    size--;
  }

  public void removeLast() {
    if (isEmpty()) throw new NoSuchElementException();

    if (first == last)
      first = last = null;
    else {
      var current = first;
      var item = last;
      while (current != null) {
        if (current.next == item) {
          current.next = null;
          last = current;
        }
        current = current.next;
      }
      item.value = 0;
    }

    size--;
  }

  public int size() {
    return size;
  }

  public int[] toArray() {
    int[] array = new int[size()];
    var current = first;
    int index = 0;
    while (current != null) {
      array[index++] = current.value;
      current = current.next;
    }

    return array;
  }

  public void reverse() {
    if (isEmpty()) return;

    var current = first;
    var newLast = last;
    var originalSize = size();
    var iterateSize = originalSize;
    for (int j = 0; j <= iterateSize; j++) {
      if (current.next == newLast) {
        this.addLast(current.value);
        newLast = current;
        current = first;
        j = 0;
        iterateSize--;
      }
      if (j != 0)
        current = current.next;
    }
    for (int i = 0; i < originalSize - 1; i++) {
      this.removeFirst();
    }
  }

  public int getKthFromTheEnd(int k) {
    if (isEmpty()) throw new IllegalStateException();

    var current = first;
    int index = size - k + 1;
    if (k > size || k < 1) {
      throw new IllegalArgumentException();
    }
    for (int i = 1; i != index + 1; i++) {
      if (i != index) {
        current = current.next;
      }
    }
    return current.value;
  }
}
