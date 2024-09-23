// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::module::topic::TopicService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.module.topic;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.module.topic.TopicService
 */
@Service("topicService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class TopicServiceImpl
    extends TopicServiceBase
{
    public TopicServiceImpl(
        TopicDao topicDao,
        TopicRepository topicRepository,
        MessageSource messageSource
    ) {
        
        super(
            topicDao,
            topicRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#findById(Long)
     */
    @Override
    protected TopicVO handleFindById(Long id)
        throws Exception
    {
        // TODO implement protected  TopicVO handleFindById(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleFindById(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#getAll()
     */
    @Override
    protected Collection<TopicVO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<TopicVO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(Long id)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleRemove(Long id) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#save(TopicVO)
     */
    @Override
    protected TopicVO handleSave(TopicVO topic)
        throws Exception
    {
        // TODO implement protected  TopicVO handleSave(TopicVO topic)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleSave(TopicVO topic) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#search(String, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<TopicVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        // TODO implement protected  Collection<TopicVO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleSearch(String criteria, Set<PropertySearchOrder> orderings) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#findModuleTopics(Long)
     */
    @Override
    protected Collection<TopicVO> handleFindModuleTopics(Long moduleId)
        throws Exception
    {
        // TODO implement protected  Collection<TopicVO> handleFindModuleTopics(Long moduleId)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleFindModuleTopics(Long moduleId) Not implemented!");
    }

    /**
     * @see bw.co.roguesystems.thutego.module.topic.TopicService#findModuleOutcomeTopics(Long)
     */
    @Override
    protected Collection<TopicVO> handleFindModuleOutcomeTopics(Long outcomeId)
        throws Exception
    {
        // TODO implement protected  Collection<TopicVO> handleFindModuleOutcomeTopics(Long outcomeId)
        throw new UnsupportedOperationException("bw.co.roguesystems.thutego.module.topic.TopicService.handleFindModuleOutcomeTopics(Long outcomeId) Not implemented!");
    }

}