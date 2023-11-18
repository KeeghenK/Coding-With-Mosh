package com.codewithmosh;

import java.util.*;

public class CharFinder {
    public char findFirstNonRepeatingChar(String str) {
        Map<Character, Integer> map = new HashMap<>();

        var chars = str.toLowerCase().toCharArray();
        for (char ch : chars) {
            var count = map.getOrDefault(ch, 0);
            map.put(ch, count + 1);
        }

        for (char ch : chars)
            if (map.get(ch) == 1)
                return ch;

        return Character.MIN_VALUE;
    }

    public char findFirstRepeatedChar(String str) {
        Set<Character> set = new HashSet<>();

        for (char ch : str.toLowerCase().toCharArray()) {
            if (set.contains(ch))
                return ch;
            set.add(ch);
        }

        return Character.MIN_VALUE;
    }
}
