// Generated by hibernate/SpringHibernateDaoImpl.vsl in andromda-spring-cartridge on $springUtils.date.
// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 */
package bw.co.roguesystems.thutego.stratergies.assessment;

import org.springframework.stereotype.Repository;

/**
 * @see AssessmentStratergy
 */
@Repository("assessmentStratergyDao")
public class AssessmentStratergyDaoImpl
    extends AssessmentStratergyDaoBase
{
    
    public AssessmentStratergyDaoImpl(
        AssessmentStratergyRepository assessmentStratergyRepository
    ) {

        super(
            assessmentStratergyRepository
        );
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void toAssessmentStrategyVO(
        AssessmentStratergy source,
        AssessmentStrategyVO target)
    {
        // TODO verify behavior of toAssessmentStrategyVO
        super.toAssessmentStrategyVO(source, target);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public AssessmentStrategyVO toAssessmentStrategyVO(final AssessmentStratergy entity)
    {
        // TODO verify behavior of toAssessmentStrategyVO
        return super.toAssessmentStrategyVO(entity);
    }

    /**
     * Retrieves the entity object that is associated with the specified value object
     * from the object store. If no such entity object exists in the object store,
     * a new, blank entity is created
     */
    private AssessmentStratergy loadAssessmentStratergyFromAssessmentStrategyVO(AssessmentStrategyVO assessmentStrategyVO)
    {
        // TODO implement loadAssessmentStratergyFromAssessmentStrategyVO
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.stratergies.assessment.loadAssessmentStratergyFromAssessmentStrategyVO(AssessmentStrategyVO) not yet implemented.");

        /* A typical implementation looks like this:
        if (assessmentStrategyVO.getId() == null)
        {
            return  AssessmentStratergy.Factory.newInstance();
        }
        else
        {
            return this.load(assessmentStrategyVO.getId());
        }
        */
    }

    /**
     * {@inheritDoc}
     */
    public AssessmentStratergy assessmentStrategyVOToEntity(AssessmentStrategyVO assessmentStrategyVO)
    {
        // TODO verify behavior of assessmentStrategyVOToEntity
        AssessmentStratergy entity = this.loadAssessmentStratergyFromAssessmentStrategyVO(assessmentStrategyVO);
        this.assessmentStrategyVOToEntity(assessmentStrategyVO, entity, true);
        return entity;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void assessmentStrategyVOToEntity(
        AssessmentStrategyVO source,
        AssessmentStratergy target,
        boolean copyIfNull)
    {
        // TODO verify behavior of assessmentStrategyVOToEntity
        super.assessmentStrategyVOToEntity(source, target, copyIfNull);
    }
}