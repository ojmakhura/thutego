// Generated by hibernate/SpringHibernateDaoImpl.vsl in andromda-spring-cartridge on $springUtils.date.
// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 */
package bw.co.roguesystems.thutego.stratergies.training;

import org.springframework.stereotype.Repository;

/**
 * @see TrainingStratergy
 */
@Repository("trainingStratergyDao")
public class TrainingStratergyDaoImpl
    extends TrainingStratergyDaoBase
{
    
    public TrainingStratergyDaoImpl(
        TrainingStratergyRepository trainingStratergyRepository
    ) {

        super(
            trainingStratergyRepository
        );
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void toTrainingStrategyVO(
        TrainingStratergy source,
        TrainingStrategyVO target)
    {
        // TODO verify behavior of toTrainingStrategyVO
        super.toTrainingStrategyVO(source, target);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TrainingStrategyVO toTrainingStrategyVO(final TrainingStratergy entity)
    {
        // TODO verify behavior of toTrainingStrategyVO
        return super.toTrainingStrategyVO(entity);
    }

    /**
     * Retrieves the entity object that is associated with the specified value object
     * from the object store. If no such entity object exists in the object store,
     * a new, blank entity is created
     */
    private TrainingStratergy loadTrainingStratergyFromTrainingStrategyVO(TrainingStrategyVO trainingStrategyVO)
    {
        // TODO implement loadTrainingStratergyFromTrainingStrategyVO
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.training.loadTrainingStratergyFromTrainingStrategyVO(TrainingStrategyVO) not yet implemented.");

        /* A typical implementation looks like this:
        if (trainingStrategyVO.getId() == null)
        {
            return  TrainingStratergy.Factory.newInstance();
        }
        else
        {
            return this.load(trainingStrategyVO.getId());
        }
        */
    }

    /**
     * {@inheritDoc}
     */
    public TrainingStratergy trainingStrategyVOToEntity(TrainingStrategyVO trainingStrategyVO)
    {
        // TODO verify behavior of trainingStrategyVOToEntity
        TrainingStratergy entity = this.loadTrainingStratergyFromTrainingStrategyVO(trainingStrategyVO);
        this.trainingStrategyVOToEntity(trainingStrategyVO, entity, true);
        return entity;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void trainingStrategyVOToEntity(
        TrainingStrategyVO source,
        TrainingStratergy target,
        boolean copyIfNull)
    {
        // TODO verify behavior of trainingStrategyVOToEntity
        super.trainingStrategyVOToEntity(source, target, copyIfNull);
    }
}