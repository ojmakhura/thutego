// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::curricullum::CurriculumService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.curricullum;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SearchObject;
import bw.co.roguesystems.thutego.SortOrderFactory;
import bw.co.roguesystems.thutego.ThutegoSpecifications;
import bw.co.roguesystems.thutego.curricullum.level.CurriculumLevelVO;
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
 * @see bw.co.roguesystems.thutego.curricullum.CurriculumService
 */
@Service("curriculumService")
@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
public class CurriculumServiceImpl
        extends CurriculumServiceBase {
    public CurriculumServiceImpl(
            CurricullumDao curricullumDao,
            CurricullumRepository curricullumRepository,
            MessageSource messageSource) {

        super(
                curricullumDao,
                curricullumRepository,
                messageSource);
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#findById(Long)
     */
    @Override
    protected CurriculumVO handleFindById(Long id)
            throws Exception {

        return this.getCurricullumDao().toCurriculumVO(this.getCurricullumRepository().getReferenceById(id));
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#getAll()
     */
    @Override
    protected Collection<CurriculumListVO> handleGetAll()
            throws Exception {

        return this.getCurricullumDao().toCurriculumListVOCollection(this.getCurricullumRepository().findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
            throws Exception {

        this.getCurricullumRepository().deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#save(CurriculumLevelVO)
     */
    @Override
    protected CurriculumVO handleSave(CurriculumVO curriculum)
            throws Exception {

        Curricullum entity = this.getCurricullumDao().curriculumVOToEntity(curriculum);
        entity = this.getCurricullumRepository().save(entity);

        return this.getCurricullumDao().toCurriculumVO(entity);
    }

    private Specification<Curricullum> getSpecification(CurriculumSearchCriteria criteria) {

        Specification<Curricullum> specification = null;

        if (StringUtils.isNotBlank(criteria.getName())) {
            specification = ThutegoSpecifications.findByAttributeLikeIgnoreCase(criteria.getName(), criteria.getName());
        }

        if (StringUtils.isNotBlank(criteria.getCode())) {
            Specification<Curricullum> tmp = ThutegoSpecifications.findByAttributeLikeIgnoreCase(criteria.getCode(),
                    criteria.getCode());

            if (specification == null) {
                specification = tmp;
            } else {
                specification = specification.and(tmp);
            }
        }

        if (criteria.getStatus() != null) {

            Specification<Curricullum> tmp = ThutegoSpecifications
                    .<Curricullum, CurricullumStatus>findByAttributeEquals(criteria.getStatus(), "status");

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
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#search(CurriculumSearchCriteria,
     *      Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<CurriculumListVO> handleSearch(CurriculumSearchCriteria criteria,
            Set<PropertySearchOrder> orderings)
            throws Exception {

        Specification<Curricullum> specification = getSpecification(criteria);
        Sort sort = SortOrderFactory.createSortOrder(orderings);

        if (sort == null) {
            return this.getCurricullumDao()
                    .toCurriculumListVOCollection(this.getCurricullumRepository().findAll(specification));
        }

        return this.getCurricullumDao()
                .toCurriculumListVOCollection(this.getCurricullumRepository().findAll(specification, sort));
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#getAll(Integer,
     *      Integer)
     */
    @Override
    protected Page<CurriculumListVO> handleGetAll(Integer pageNumber, Integer pageSize)
            throws Exception {

        Page<Curricullum> page = this.getCurricullumRepository().findAll(PageRequest.of(pageNumber, pageSize));

        return page.map(this.getCurricullumDao()::toCurriculumListVO);
    }

    /**
     * @see bw.co.roguesystems.thutego.curricullum.CurriculumService#search(SearchObject<CurriculumSearchCriteria>)
     */
    @Override
    protected Page<CurriculumListVO> handleSearch(SearchObject<CurriculumSearchCriteria> criteria)
            throws Exception {

        Specification<Curricullum> specification = getSpecification(criteria.getCriteria());
        Sort sort = SortOrderFactory.createSortOrder(criteria.getSortings());

        Page<Curricullum> page = sort == null
                ? this.getCurricullumRepository().findAll(specification,
                        PageRequest.of(criteria.getPageNumber(), criteria.getPageSize()))
                : this.getCurricullumRepository().findAll(specification,
                        PageRequest.of(criteria.getPageNumber(), criteria.getPageSize(), sort));

        return page.map(this.getCurricullumDao()::toCurriculumListVO);
    }

}