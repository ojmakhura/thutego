package bw.co.roguesystems.thutego;

import org.springframework.data.domain.Sort;
import java.util.Collection;

public class SortOrderFactory {
    
    public static Sort createSortOrder(Collection<PropertySearchOrder> orderings) {
        
        Sort sort = null;

        if(orderings != null && !orderings.isEmpty()) {
            for(PropertySearchOrder order : orderings) {
                if(sort == null) {
                    sort = Sort.by(Sort.Direction.fromString(order.getOrder().getValue()), order.getPropertyName());
                } else {
                    sort = sort.and(Sort.by(Sort.Direction.fromString(order.getOrder().getValue()), order.getPropertyName()));
                }
            }
        }

        return sort;
    }

}
