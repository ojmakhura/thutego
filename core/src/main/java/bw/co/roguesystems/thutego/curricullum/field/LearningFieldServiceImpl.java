// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curricullum::field::LearningFieldService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curricullum.field;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SortOrderFactory;

import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curricullum.field.LearningFieldService
 */
@Service("learningFieldService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class LearningFieldServiceImpl
    extends LearningFieldServiceBase
{
    public LearningFieldServiceImpl(
        LearningFieldDao learningFieldDao,
        LearningFieldRepository learningFieldRepository,
        MessageSource messageSource
    ) {
        
        super(
            learningFieldDao,
            learningFieldRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.field.LearningFieldService#findById(Long)
     */
    @Override
    protected LearningFieldVO handleFindById(Long id)
        throws Exception
    {

        return this.getLearningFieldDao().toLearningFieldVO(this.getLearningFieldRepository().getReferenceById(id));
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.field.LearningFieldService#getAll()
     */
    @Override
    protected Collection<LearningFieldVO> handleGetAll()
        throws Exception
    {

        return this.getLearningFieldDao().toLearningFieldVOCollection(this.getLearningFieldRepository().findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.field.LearningFieldService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        this.getLearningFieldRepository().deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.field.LearningFieldService#save(LearningFieldVO)
     */
    @Override
    protected LearningFieldVO handleSave(LearningFieldVO field)
        throws Exception
    {

        LearningField entity = learningFieldDao.learningFieldVOToEntity(field);
        entity = this.getLearningFieldRepository().save(entity);
        return this.getLearningFieldDao().toLearningFieldVO(entity);        
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.field.LearningFieldService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<LearningFieldVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {

        Specification<LearningField> spec = (root, query, cb) -> {
            return cb.or(
                cb.like(cb.lower(root.get("field")), "%" + criteria.toLowerCase() + "%"),
                cb.like(cb.lower(root.get("code")), "%" + criteria.toLowerCase() + "%")
            );
        };

        Sort sort = SortOrderFactory.createSortOrder(orderings);

        if(sort == null) {
            return this.getLearningFieldDao().toLearningFieldVOCollection(this.getLearningFieldRepository().findAll(spec));
        }

        return this.getLearningFieldDao().toLearningFieldVOCollection(this.getLearningFieldRepository().findAll(spec, sort));

    }

}