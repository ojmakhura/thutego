// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::stratergies::training::TrainingStratergyService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.stratergies.training;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService
 */
@Service("trainingStratergyService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class TrainingStratergyServiceImpl
    extends TrainingStratergyServiceBase
{
    public TrainingStratergyServiceImpl(
        TrainingStratergyDao trainingStratergyDao,
        TrainingStratergyRepository trainingStratergyRepository,
        MessageSource messageSource
    ) {
        
        super(
            trainingStratergyDao,
            trainingStratergyRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService#findById(Long)
     */
    @Override
    protected TrainingStrategyVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  TrainingStrategyVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService#getAll()
     */
    @Override
    protected Collection<TrainingStrategyVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<TrainingStrategyVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService#save(TrainingStrategyVO)
     */
    @Override
    protected TrainingStrategyVO handleSave(TrainingStrategyVO trainingStratergy)
        throws Exception
    {
        // TODO implement protected  TrainingStrategyVO handleSave(TrainingStrategyVO trainingStratergy)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService.handleSave(TrainingStrategyVO trainingStratergy) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<TrainingStrategyVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<TrainingStrategyVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.training.TrainingStratergyService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

}