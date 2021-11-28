

function Merge()
{
    c_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            div_update(divs[q],div_sizes[q],"red");//Color update
            Arr[k++]=div_sizes[q++];
            
        }
        else if(q>end)
        {
            div_update(divs[p],div_sizes[p],"red");//Color update
            Arr[k++]=div_sizes[p++];
            
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            div_update(divs[p],div_sizes[p],"red");//Color update
            Arr[k++]=div_sizes[p++];
            
        }
        else
        {
            div_update(divs[q],div_sizes[q],"red");//Color update
            Arr[k++]=div_sizes[q++];
           
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];


        // now all the elements of the segement are sorted so change back its colour to green
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        //mid as one selected block so change its colour to yellow
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
