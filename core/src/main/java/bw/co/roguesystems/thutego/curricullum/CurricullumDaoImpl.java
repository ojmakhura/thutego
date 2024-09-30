// Generated by hibernate/SpringHibernateDaoImpl.vsl in andromda-spring-cartridge on $springUtils.date.
// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 */
package bw.co.roguesystems.thutego.curricullum;

import bw.co.roguesystems.thutego.curricullum.domain.DomainRepository;
import bw.co.roguesystems.thutego.curricullum.domain.DomainVO;
import bw.co.roguesystems.thutego.curricullum.field.LearningFieldRepository;
import bw.co.roguesystems.thutego.curricullum.field.LearningFieldVO;
import bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelRepository;
import bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelVO;
import bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeRepository;
import bw.co.roguesystems.thutego.module.ModuleRepository;
import org.springframework.stereotype.Repository;

/**
 * @see Curricullum
 */
@Repository("curricullumDao")
public class CurricullumDaoImpl
        extends CurricullumDaoBase {

    public CurricullumDaoImpl(
            ExitLevelOutcomeRepository exitLevelOutcomeRepository,
            ModuleRepository moduleRepository,
            CurriculumLevelRepository curriculumLevelRepository,
            DomainRepository domainRepository,
            LearningFieldRepository learningFieldRepository,
            CurricullumRepository curricullumRepository) {

        super(exitLevelOutcomeRepository, moduleRepository, curriculumLevelRepository, domainRepository,
                learningFieldRepository, curricullumRepository);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void toCurriculumListVO(
            Curricullum source,
            CurriculumListVO target) {
        // TODO verify behavior of toCurriculumListVO
        super.toCurriculumListVO(source, target);
        // WARNING! No conversion for target.level (can't convert
        // source.getLevel():bw.co.roguesystems.thutego.curricullum.level.CurriculumLevel
        // to bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelVO
        if (source.getLevel() != null) {

            CurriculumLevelVO level = new CurriculumLevelVO();
            level.setId(source.getLevel().getId());
            level.setLevel(source.getLevel().getLevel());
            target.setLevel(level);
        }

        if (source.getDomain() != null) {

            target.setDomain(source.getDomain().getName());
        }

        if (source.getLearningField() != null) {
            target.setLearningField(source.getLearningField().getField());
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public CurriculumListVO toCurriculumListVO(final Curricullum entity) {
        // TODO verify behavior of toCurriculumListVO
        return super.toCurriculumListVO(entity);
    }

    /**
     * Retrieves the entity object that is associated with the specified value
     * object
     * from the object store. If no such entity object exists in the object store,
     * a new, blank entity is created
     */
    private Curricullum loadCurricullumFromCurriculumListVO(CurriculumListVO curriculumListVO) {
        if (curriculumListVO.getId() == null) {
            return Curricullum.Factory.newInstance();
        } else {
            return this.load(curriculumListVO.getId());
        }
    }

    /**
     * {@inheritDoc}
     */
    public Curricullum curriculumListVOToEntity(CurriculumListVO curriculumListVO) {
        // TODO verify behavior of curriculumListVOToEntity
        Curricullum entity = this.loadCurricullumFromCurriculumListVO(curriculumListVO);
        this.curriculumListVOToEntity(curriculumListVO, entity, true);
        return entity;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void curriculumListVOToEntity(
            CurriculumListVO source,
            Curricullum target,
            boolean copyIfNull) {
        // TODO verify behavior of curriculumListVOToEntity
        super.curriculumListVOToEntity(source, target, copyIfNull);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void toCurriculumVO(
            Curricullum source,
            CurriculumVO target) {
        // TODO verify behavior of toCurriculumVO
        super.toCurriculumVO(source, target);
        // WARNING! No conversion for target.level (can't convert
        // source.getLevel():bw.co.roguesystems.thutego.curricullum.level.CurriculumLevel
        // to bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelVO
        if (source.getLevel() != null) {

            CurriculumLevelVO level = new CurriculumLevelVO();
            level.setId(source.getLevel().getId());
            level.setLevel(source.getLevel().getLevel());
            target.setLevel(level);

        }
        // WARNING! No conversion for target.exitLevelOutcomes (can't convert
        // source.getExitLevelOutcomes():bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcome
        // to bw.co.roguesystems.thutego.curricullum.outcome.ExitLevelOutcomeVO

        if (source.getDomain() != null) {
            DomainVO domain = new DomainVO();
            domain.setId(source.getDomain().getId());
            domain.setCode(source.getDomain().getCode());
            domain.setName(source.getDomain().getName());

            target.setDomain(domain);
        }

        if (source.getLearningField() != null) {
            LearningFieldVO learningField = new LearningFieldVO();
            learningField.setId(source.getLearningField().getId());
            learningField.setCode(source.getLearningField().getCode());
            learningField.setField(source.getLearningField().getField());

            target.setLearningField(learningField);
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public CurriculumVO toCurriculumVO(final Curricullum entity) {
        // TODO verify behavior of toCurriculumVO
        return super.toCurriculumVO(entity);
    }

    /**
     * Retrieves the entity object that is associated with the specified value
     * object
     * from the object store. If no such entity object exists in the object store,
     * a new, blank entity is created
     */
    private Curricullum loadCurricullumFromCurriculumVO(CurriculumVO curriculumVO) {

        if (curriculumVO.getId() == null) {
            return Curricullum.Factory.newInstance();
        } else {
            return this.load(curriculumVO.getId());
        }

    }

    /**
     * {@inheritDoc}
     */
    public Curricullum curriculumVOToEntity(CurriculumVO curriculumVO) {
        // TODO verify behavior of curriculumVOToEntity
        Curricullum entity = this.loadCurricullumFromCurriculumVO(curriculumVO);
        this.curriculumVOToEntity(curriculumVO, entity, true);
        return entity;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void curriculumVOToEntity(
            CurriculumVO source,
            Curricullum target,
            boolean copyIfNull) {
        // TODO verify behavior of curriculumVOToEntity
        super.curriculumVOToEntity(source, target, copyIfNull);
    }
}