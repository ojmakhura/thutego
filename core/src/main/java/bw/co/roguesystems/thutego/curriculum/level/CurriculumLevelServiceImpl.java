// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curriculum::level::CurriculumLevelService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curriculum.level;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SortOrderFactory;
import bw.co.roguesystems.thutego.curriculum.level.CurriculumLevel;
import bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelDao;
import bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelRepository;
import bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelServiceBase;
import bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelVO;
import io.micrometer.common.util.StringUtils;

import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelService
 */
@Service("curriculumLevelService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class CurriculumLevelServiceImpl
    extends CurriculumLevelServiceBase
{
    public CurriculumLevelServiceImpl(
        CurriculumLevelDao curriculumLevelDao,
        CurriculumLevelRepository curriculumLevelRepository,
        MessageSource messageSource
    ) {
        
        super(
            curriculumLevelDao,
            curriculumLevelRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelService#findById(Long)
     */
    @Override
    protected CurriculumLevelVO handleFindById(Long id)
        throws Exception
    {

        return this.getCurriculumLevelDao().toCurriculumLevelVO(curriculumLevelRepository.getReferenceById(id));
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelService#getAll()
     */
    @Override
    protected Collection<CurriculumLevelVO> handleGetAll()
        throws Exception
    {

        return this.getCurriculumLevelDao().toCurriculumLevelVOCollection(curriculumLevelRepository.findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {

        curriculumLevelRepository.deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelService#save(CurriculumLevelVO)
     */
    @Override
    protected CurriculumLevelVO handleSave(CurriculumLevelVO curriculumLevel)
        throws Exception
    {
            
            CurriculumLevel entity = this.getCurriculumLevelDao().curriculumLevelVOToEntity(curriculumLevel);
            curriculumLevelRepository.save(entity);
            return this.getCurriculumLevelDao().toCurriculumLevelVO(entity);
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<CurriculumLevelVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {

        Specification<CurriculumLevel> specification = null;

        if(StringUtils.isNotBlank(criteria)) {
            specification = (root, query, cb) -> {
                return cb.or(
                    cb.like(cb.lower(root.get("level")), "%" + criteria.toLowerCase() + "%"),
                    cb.like(cb.lower(root.get("code")), "%" + criteria.toLowerCase() + "%")
                );
            };
        }

        Sort sort = SortOrderFactory.createSortOrder(orderings);

        if(sort == null) {
            return this.getCurriculumLevelDao().toCurriculumLevelVOCollection(curriculumLevelRepository.findAll(specification));
        }

        return this.getCurriculumLevelDao().toCurriculumLevelVOCollection(curriculumLevelRepository.findAll(specification, sort));

    }

}