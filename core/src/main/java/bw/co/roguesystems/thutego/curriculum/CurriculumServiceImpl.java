// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curriculum::CurriculumService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curriculum;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SearchObject;
import bw.co.roguesystems.thutego.SortOrderFactory;
import bw.co.roguesystems.thutego.ThutegoSpecifications;
import bw.co.roguesystems.thutego.curriculum.Curriculum;
import bw.co.roguesystems.thutego.curriculum.CurriculumDao;
import bw.co.roguesystems.thutego.curriculum.CurriculumRepository;
import bw.co.roguesystems.thutego.curriculum.CurriculumStatus;
import bw.co.roguesystems.thutego.curriculum.CurriculumListVO;
import bw.co.roguesystems.thutego.curriculum.CurriculumSearchCriteria;
import bw.co.roguesystems.thutego.curriculum.CurriculumServiceBase;
import bw.co.roguesystems.thutego.curriculum.CurriculumVO;
import bw.co.roguesystems.thutego.curriculum.level.CurriculumLevelVO;
import java.util.Collection;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.curriculum.CurriculumService
 */
@Service("curriculumService")
@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
public class CurriculumServiceImpl
        extends CurriculumServiceBase {
    public CurriculumServiceImpl(
            CurriculumDao curriculumDao,
            CurriculumRepository curriculumRepository,
            MessageSource messageSource) {

        super(
                curriculumDao,
                curriculumRepository,
                messageSource);
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#findById(Long)
     */
    @Override
    protected CurriculumVO handleFindById(Long id)
            throws Exception {

        return this.getCurriculumDao().toCurriculumVO(this.getCurriculumRepository().getReferenceById(id));
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#getAll()
     */
    @Override
    protected Collection<CurriculumListVO> handleGetAll()
            throws Exception {

        return this.getCurriculumDao().toCurriculumListVOCollection(this.getCurriculumRepository().findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
            throws Exception {

        this.getCurriculumRepository().deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#save(CurriculumLevelVO)
     */
    @Override
    protected CurriculumVO handleSave(CurriculumVO curriculum)
            throws Exception {

        Curriculum entity = this.getCurriculumDao().curriculumVOToEntity(curriculum);
        entity = this.getCurriculumRepository().save(entity);

        return this.getCurriculumDao().toCurriculumVO(entity);
    }

    private Specification<Curriculum> getSpecification(CurriculumSearchCriteria criteria) {

        Specification<Curriculum> specification = null;

        if (StringUtils.isNotBlank(criteria.getName())) {
            specification = ThutegoSpecifications.findByAttributeLikeIgnoreCase(criteria.getName(), criteria.getName());
        }

        if (StringUtils.isNotBlank(criteria.getCode())) {
            Specification<Curriculum> tmp = ThutegoSpecifications.findByAttributeLikeIgnoreCase(criteria.getCode(),
                    criteria.getCode());

            if (specification == null) {
                specification = tmp;
            } else {
                specification = specification.and(tmp);
            }
        }

        if (criteria.getStatus() != null) {

            Specification<Curriculum> tmp = ThutegoSpecifications
                    .<Curriculum, CurriculumStatus>findByAttributeEquals(criteria.getStatus(), "status");

            if (specification == null) {
                specification = tmp;
            } else {
                specification = specification.and(tmp);
            }
        }

        // TODO: Add other specifications

        return specification;

    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#search(CurriculumSearchCriteria,
     *      Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<CurriculumListVO> handleSearch(CurriculumSearchCriteria criteria,
            Set<PropertySearchOrder> orderings)
            throws Exception {

        Specification<Curriculum> specification = getSpecification(criteria);
        Sort sort = SortOrderFactory.createSortOrder(orderings);

        if (sort == null) {
            return this.getCurriculumDao()
                    .toCurriculumListVOCollection(this.getCurriculumRepository().findAll(specification));
        }

        return this.getCurriculumDao()
                .toCurriculumListVOCollection(this.getCurriculumRepository().findAll(specification, sort));
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#getAll(Integer,
     *      Integer)
     */
    @Override
    protected Page<CurriculumListVO> handleGetAll(Integer pageNumber, Integer pageSize)
            throws Exception {

        Page<Curriculum> page = this.getCurriculumRepository().findAll(PageRequest.of(pageNumber, pageSize));

        return page.map(this.getCurriculumDao()::toCurriculumListVO);
    }

    /**
     * @see bw.co.roguesystems.thutego.curriculum.CurriculumService#search(SearchObject<CurriculumSearchCriteria>)
     */
    @Override
    protected Page<CurriculumListVO> handleSearch(SearchObject<CurriculumSearchCriteria> criteria)
            throws Exception {

        Specification<Curriculum> specification = getSpecification(criteria.getCriteria());
        Sort sort = SortOrderFactory.createSortOrder(criteria.getSortings());

        Page<Curriculum> page = sort == null
                ? this.getCurriculumRepository().findAll(specification,
                        PageRequest.of(criteria.getPageNumber(), criteria.getPageSize()))
                : this.getCurriculumRepository().findAll(specification,
                        PageRequest.of(criteria.getPageNumber(), criteria.getPageSize(), sort));

        return page.map(this.getCurriculumDao()::toCurriculumListVO);
    }

}