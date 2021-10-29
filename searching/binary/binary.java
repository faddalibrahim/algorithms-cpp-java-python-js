package searching.binary;
import java.lang.Math;

public class Binary {
    
    public static void main(String[] args) {
        
        Binary binary = new Binary();
        binary.recursiveSearch();
        binary.iterativeSearch();

    }

    public int recursiveSearch(int[] array, int target, int start, int end) {
        start = 0;
        end = array.length - 1;

        int middle = (int) Math.floor((start + end) / 2);

        if (start > end) return -1;

        if (array[middle] == target) {
            return middle;
        } else if (array[middle] > target) {
            end = middle - 1;
            return recursive(array, target, start, end);
        } else if (array[middle] < target) {
            start = middle + 1;
            return recursive(array, target, start, end);
        }
    }

    public int iterativeSearch(int[] array, int target, int start, int end) {
        start = 0;
        end = array.length - 1;
        while (start <= end) {
            int middle = (int) Math.floor((start + end) / 2);

            if (array[middle] == target) {
                return middle;
            } else if (array[middle] > target) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }

        return -1;
    }
}