import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        byte MONTHS_IN_YEAR = 12;
        byte PERCENT = 100;

        Scanner mortgageCalculator = new Scanner(System.in);

        System.out.print("Principle: ");
        int principle = mortgageCalculator.nextInt();

        System.out.print("Annual Interest Rate: ");
        float annualInterest = mortgageCalculator.nextFloat();
        float monthlyInterest = (annualInterest / PERCENT) / MONTHS_IN_YEAR;

        System.out.print("Period (Years): ");
        byte years = mortgageCalculator.nextByte();
        int numberOfPayments = years * MONTHS_IN_YEAR;

        double mortgage = principle
                * ((monthlyInterest * Math.pow((1 + monthlyInterest), numberOfPayments))
                / (Math.pow((1 + monthlyInterest), numberOfPayments) - 1));

        NumberFormat currency = NumberFormat.getCurrencyInstance();
        System.out.println("Mortgage: " + currency.format(mortgage));
    }
}