import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    final static byte MONTHS_IN_YEAR = 12;
    final static byte PERCENT = 100;
    public static void main(String[] args) {
        int principle = (int) readNumber("Principle: ", 1000, 1_000_000);
        float annualInterest = (float) readNumber("Annual Interest Rate: ", 1, 30);
        byte years = (byte) readNumber("Period (Years): ", 1, 30);

        printMortgage(principle, annualInterest, years);
        printPaymentSchedule(principle, annualInterest, years);
    }

    private static void printMortgage(int principle, float annualInterest, byte years) {
        double mortgage = calculateMortgage(principle, annualInterest, years);
        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        System.out.println("\nMORTGAGE \n-------- \nMonthly Payments: " + mortgageFormatted);
    }

    private static void printPaymentSchedule(int principle, float annualInterest, byte years) {
        List<String> balanceList = calculateBalance(principle, annualInterest, years);
        System.out.println("\nPAYMENT SCHEDULE \n----------------");
        for (int i = 0; i < balanceList.size(); i++) {
            System.out.println(balanceList.get(i));
        }
    }

    public static double readNumber(String prompt, double min, double max) {
        Scanner scanner = new Scanner(System.in);
        double value;
        while (true) {
            System.out.print(prompt);
            value = scanner.nextDouble();
            if (value >= min && value <= max)
                break;
            System.out.println("Enter a value between " + min + " and " + max);
        }
        return value;
    }

    public static double calculateMortgage (
            int principle,
            float annualInterest,
            byte years) {

        float monthlyInterest = (annualInterest / PERCENT) / MONTHS_IN_YEAR;
        short numberOfPayments = (short)(years * MONTHS_IN_YEAR);

        return principle
                * ((monthlyInterest * Math.pow((1 + monthlyInterest), numberOfPayments))
                / (Math.pow((1 + monthlyInterest), numberOfPayments) - 1));
    }

    public static List<String> calculateBalance(
            int principle,
            float annualInterest,
            byte years) {

        float monthlyInterest = (annualInterest / PERCENT) / MONTHS_IN_YEAR;
        short numberOfPayments = (short)(years * MONTHS_IN_YEAR);

        double balance;
        List<String> balances = new ArrayList<>();

        for (int i = 1; i <= numberOfPayments ; i++) {
                balance = principle
                    * ((Math.pow((1 + monthlyInterest), numberOfPayments)
                    - Math.pow((1 + monthlyInterest), i))
                    / (Math.pow((1 + monthlyInterest), numberOfPayments) - 1));

             String formattedBalance = NumberFormat.getCurrencyInstance().format(balance);

             balances.add(formattedBalance);
        }

        return balances;
    }
}